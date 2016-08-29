function countResults(results)
{
    var count = 0;

    for (var suiteIndex = 0; suiteIndex < results.testSuiteResults.length; suiteIndex++)
    {
        count += results.testSuiteResults[suiteIndex].testCaseResults.length;
    }

    return count;
}

function countPassedResults(results)
{
    var count = 0;

    for (var suiteIndex = 0; suiteIndex < results.passedTestSuiteResults.length; suiteIndex++)
    {
        count += results.passedTestSuiteResults[suiteIndex].passedTestCaseResults.length;
    }

    return count;
}

function countFailedResults(results)
{
    var count = 0;

    for (var suiteIndex = 0; suiteIndex < results.failedTestSuiteResults.length; suiteIndex++)
    {
        count += results.failedTestSuiteResults[suiteIndex].failedTestCaseResults.length;
    }

    return count;
}

function getPrintFailed(print)
{
    function printFailed(results)
    {
        for (var suiteIndex = 0; suiteIndex < results.failedTestSuiteResults.length; suiteIndex++)
        {
            var suite = results.failedTestSuiteResults[suiteIndex];

            for (var caseIndex = 0; caseIndex < suite.failedTestCaseResults.length; caseIndex++)
            {
                print(suite.failedTestCaseResults[caseIndex]);
            }
        }
    }

    return printFailed;
}

function getPrintResults(print)
{
    var printFailed = getPrintFailed(print);

    function printResults(results)
    {
        var totalTests = countResults(results);
        var passedTests = countPassedResults(results);
        var failedTests = countFailedResults(results);

        print("Ran    : " + totalTests);
        print("Passed : " + passedTests);
        print("Failed : " + failedTests);

        printFailed(results);
    }

    return printResults;
}

exports.countResults = countResults;
exports.countPassedResults = countPassedResults;
exports.countFailedResults = countFailedResults;
exports.getPrintFailed = getPrintFailed;
exports.getPrintResults = getPrintResults;
